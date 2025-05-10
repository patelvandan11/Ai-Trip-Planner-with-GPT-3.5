import csv
import json

# Read the CSV file
csv_file = r'C:\Users\Vandan Patel\Desktop\trip planner\Ai-Trip-Planner\Backend\models\finetune\trip_planner.csv'
jsonl_file = 'trip_planner_with_messages.jsonl'

# Open the CSV and JSONL files
with open(csv_file, 'r') as csvfile, open(jsonl_file, 'w') as jsonlfile:
    reader = csv.DictReader(csvfile)
    
    # Iterate through each row in the CSV
    for row in reader:
        # Construct the prompt and completion based on the data
        trip_name = row['name']
        prompt = f"What is the itinerary for {trip_name}?"
        completion = f"Day 1: Explore the main attractions. Day 2: Visit the top sights. Day 3: Additional activities and departures."
        
        # Create the messages array with assistant as the last message
        example = {
            "messages": [
                {"role": "system", "content": "You are a helpful travel planner AI. Provide detailed day-by-day itineraries."},
                {"role": "user", "content": prompt},
                {"role": "assistant", "content": completion}
            ]
        }
        
        # Write the example to the JSONL file
        jsonlfile.write(json.dumps(example) + '\n')

print(f"CSV has been successfully converted to {jsonl_file}")
