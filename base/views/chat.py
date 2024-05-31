# your_app_name/views.py
from django.shortcuts import render

def chat(request, room_name):
    return render(request, '../views/chat.html', {
        'room_name': room_name
    })
