FROM python:3.7 
ENV PYTHONBUFFERED 1 
ADD . /sl 
WORKDIR /sl 
COPY ./requirements.txt /sl/requirements.txt 
RUN pip install -r requirements.txt 
CMD python sl.py 
FROM python:3.7 
ENV PYTHONBUFFERED 1 
ADD . /sl 
WORKDIR /sl 
COPY ./requirements.txt /sl/requirements.txt 
RUN pip install -r requirements.txt 
CMD ["streamlit","run","sl.py",'flask','--host=0.0.0.0']