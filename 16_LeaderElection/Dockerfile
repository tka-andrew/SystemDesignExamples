FROM python:3.6.9-slim

RUN mkdir /src
WORKDIR /src

COPY requirements.txt requirements.txt
COPY leader_election.py leader_election.py
RUN pip install --no-cache-dir -r requirements.txt

CMD ["python", "leader_election.py"]