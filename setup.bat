@echo off
echo Menginisialisasi Backend (Go)...
cd backend
go mod tidy
cd ..

echo Menginisialisasi Frontend (SvelteKit)...
cd frontend
call npm install
echo Selesai!
pause
