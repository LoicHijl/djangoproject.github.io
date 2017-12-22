from django.db import models
from datetime import datetime

# Create your models here.

class Comments(models.Model):
  title = models.CharField(max_length=200)
  body = models.TextField()
  created_at = models.DateTimeField(default=datetime.now, blank=True)
  def __str__(self):
    return self.title
  class Meta:
    # This way it won't show up as "Commentss with double "s"
    verbose_name_plural = "Comments"
