# Use official Python image
FROM python:3.9-slim

# Set working directory
WORKDIR /app

# Copy dependency file
COPY requirements.txt .

# Install dependencies
RUN pip install --no-cache-dir -r requirements.txt

# Copy the app files
COPY . .

# Expose port
EXPOSE 5000

# Command to run the Flask app
CMD ["python", "app.py"]
