#import the load_env from python-dotenv module 
from dotenv import load_dotenv 
load_dotenv()
import os
#!Access the environment varialbes 
my_id = os.getenv("DB_URL")
my_secret_key=os.getenv("DB_NAME")

def myEnvironment():
    print(f"My id is:{my_id}")
    print(f"My DB Name is {my_secret_key}")
if __name__=="__main__":
    myEnvironment()