# stages backend
FROM python:3.9-slim AS backend

# Install git untuk meng-clone repository
RUN apt-get update && apt-get install -y git

# Buat working directory untuk backend
WORKDIR /backend

# Clone branch backend dari repository
RUN git clone -b backend https://github.com/mhdusop/GAN-Skin-Disease-Identifier.git .

RUN ls -l /backend

# Install dependencies dari requirements.txt
RUN pip install -r requirements.txt

# Expose port untuk backend (misalnya 5000)
EXPOSE 5000

# Jalankan aplikasi backend
CMD ["python", "app.py"]