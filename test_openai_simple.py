"""Test OpenAI API connectivity"""
from openai import OpenAI
import sys

print("Testing OpenAI API connectivity...")
print(f"Python: {sys.version}")

try:
    client = OpenAI(
        api_key='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',
        timeout=30.0
    )
    
    print("Client created, calling API...")
    
    response = client.chat.completions.create(
        model="gpt-4o-mini",
        messages=[{"role": "user", "content": "Say hello in one word"}],
        max_tokens=10
    )
    
    print(f"✅ SUCCESS!")
    print(f"Response: {response.choices[0].message.content}")
    
except Exception as e:
    print(f"❌ ERROR: {type(e).__name__}: {e}")
    import traceback
    traceback.print_exc()
