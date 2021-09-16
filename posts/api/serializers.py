from rest_framework import serializers
from posts.models import Tag, Post, PostImage, Like


class TagSerializer(serializers.ModelSerializer):

    class Meta:
        model = Tag
        fields = '__all__'


class PostImageSerializer(serializers.ModelSerializer):
    class Meta:
        model = PostImage
        fields = "__all__"


class LikeSerializer(serializers.ModelSerializer):
    class Meta:
        model = Like
        fields = "__all__"


class PostSerializer(serializers.ModelSerializer):
    user = serializers.CharField(read_only=True)
    post_images = PostImageSerializer(read_only=True, many=True)
    total_likes = serializers.SerializerMethodField()

    class Meta:
        model = Post
        fields = "__all__"

    def get_total_likes(self, instance):
        return instance.like_post.all().count()


class PostDetailSerializer(serializers.ModelSerializer):
    post_images = PostImageSerializer(read_only=True, many=True)
    like_post = LikeSerializer(read_only=True, many=True)
    total_likes = serializers.SerializerMethodField(read_only=True)

    class Meta:
        model = Post
        fields = "__all__"

    def get_total_likes(self, instance):
        return instance.like_post.all().count()