# urls.py у вашому додатку base
from django.urls import path
from base.views import chat as views

urlpatterns = [
    path('chat/<str:room_name>/', views.chat, name='chat_room'),
]
