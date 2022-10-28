FROM python:alpine

WORKDIR /app

ENV PYTHONDONTWRITEBYTECODE 1
ENV PYTHONUNBUFFERED 1

RUN pip install --upgrade pip
COPY requirements.txt .
RUN pip3 install -r requirements.txt

EXPOSE 8000

COPY . .

CMD ["gunicorn", "--bind", ":8000", "--workers", "3", "shop.wsgi:application"]