from django.shortcuts import render
from django.http import HttpResponse
from .models import Comments
# from .models import Posts
# Create your views here.

def index(request):
    return render(request, 'posts/index.html')
def About(request):
    return render(request, 'posts/About.html')
def Help(request):
    return render(request, 'posts/Help.html')
def Store(request):
    return render(request, 'posts/Store.html')
def Recipes(request):

    comments = Comments.objects.all()[:7]

    context = {
        'title': 'Comment Section',
        'comments': comments
    }
    return render(request, 'posts/Recipes.html', context)

#def Details(request, id): #To view the comments
#    comment = Comments.objects.get(id=id)

#    context = {
#        'comment': comment
#    }
    return render(request, 'posts/Details.html', context)
def China(request):
    return render(request, 'posts/China.html')
def Dutch(request):
    return render(request, 'posts/Dutch.html')
def Italian(request):
    return render(request, 'posts/Italian.html')
def Japanese(request):
    return render(request, 'posts/Japanese.html')
def Mexican(request):
    return render(request, 'posts/Mexican.html')
def Thai(request):
    return render(request, 'posts/Thai.html')
