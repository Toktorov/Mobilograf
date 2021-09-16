from django.contrib import admin
from posts.models import Tag, Post, PostImage, Like

# Register your models here.
admin.site.register(Tag)
admin.site.register(Post)
admin.site.register(PostImage)
admin.site.register(Like)