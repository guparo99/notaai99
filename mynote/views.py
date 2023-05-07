from django.shortcuts import render
from django.views.generic import ListView, TemplateView, CreateView, UpdateView, DeleteView, DetailView
from django.contrib.auth.mixins     import LoginRequiredMixin

# Create your views here.
class HomePageView( TemplateView):
    template_name = "mynote/home.html"