from django.shortcuts import render

# Create your views here.
def home(request):
    print("hello world")
    return render(request, 'index.html')
