from django.urls import path
from . import views

urlpatterns = [
    path('', views.index, name='index'),
    path('index.html', views.index, name='index'),
    path('China.html', views.China, name='China'),
    path('About.html', views.About, name='About'),
    path('Help.html', views.Help, name='Help'),
    path('Recipes.html', views.Recipes, name='Recipes'),
    path('Store.html', views.Store, name='Store'),
    path('Dutch.html', views.Dutch, name='Dutch'),
    path('Italian.html', views.Italian, name='Italian'),
    path('Mexican.html', views.Mexican, name='Mexican'),
    path('Japanese.html', views.Japanese, name='Japanese'),
    path('Thai.html', views.Thai, name='Thai'),
    #path('details/(?P<id>\d+)', views.Details, name='Details')
]
