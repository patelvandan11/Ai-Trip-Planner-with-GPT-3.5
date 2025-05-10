import csv
import json

# Define the CSV file and JSONL file paths
csv_file = r'C:\Users\Vandan Patel\Desktop\trip planner\Ai-Trip-Planner\Backend\models\finetune\trip_planner.csv'  # Replace with your CSV file path
jsonl_file = 'trip_planner.jsonl'  # Output JSONL file

# Function to convert CSV to JSONL format
def csv_to_jsonl(csv_file, jsonl_file):
    with open(csv_file, mode='r', encoding='utf-8') as csvfile:
        csvreader = csv.DictReader(csvfile)
        with open(jsonl_file, mode='w', encoding='utf-8') as jsonlfile:
            for row in csvreader:
                # Prepare the structure for the JSONL file
                json_object = {
                    "prompt": f"Create a detailed trip itinerary for {row['name']} ({row['category']}):\n\n",
                    "completion": f"Highlights: {row['highlights']}\nDuration: {row['duration']} days\nPrice: ₹{row['price']}\n"
                }
                # Write each line as a JSON object
                jsonlfile.write(json.dumps(json_object) + "\n")

# Call the function to convert the CSV file to JSONL
csv_to_jsonl(csv_file, jsonl_file)

print(f"Conversion complete! Check the file '{jsonl_file}'.")
