from django.shortcuts import render
from django.contrib.auth.decorators import login_required
from django.urls import reverse, reverse_lazy
from django.shortcuts import redirect
# Create your views here.


def show_page(request):
    return render(request, 'TopPage/TopPage.html')