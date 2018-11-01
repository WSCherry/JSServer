@echo off

set PROTO_FLODER=.\message\proto
set OUTJS_FLODER=.\AJS\message
set OUTTS_FLODER=.\src\message

del %OUTJS_FLODER%\*.* /f /s /q
del %OUTTS_FLODER%\*.* /f /s /q

for /f "delims=" %%i in ('dir /b "%PROTO_FLODER%\*.proto"') do (
    pbjs -t static-module -w commonjs -o %OUTJS_FLODER%\%%~ni.js %PROTO_FLODER%\%%i
    pbts -o %OUTTS_FLODER%\%%~ni.d.ts %OUTJS_FLODER%\%%~ni.js
)

echo OK
pause 