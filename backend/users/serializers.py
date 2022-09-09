from rest_framework import serializers
from rest_framework.validators import UniqueValidator

from .models import User


class SignUpSerializer(serializers.Serializer):
    """Serializer for user registration."""

    username = serializers.CharField(
        max_length=30,
        validators=[UniqueValidator(
            queryset=User.objects.all())]
        )
    password = serializers.CharField(min_length=8)
    password2 = serializers.CharField(min_length=8, write_only=True)

    def validate(
            self,
            data: dict
    ) -> dict:
        """Check that first password equal second"""
        if data['password'] == data['password2']:
            return data
        raise serializers.ValidationError('Passwords doesn\'t match')


class LogInSerializer(serializers.Serializer):
    """Serializer for login users."""
    username = serializers.CharField()
    password = serializers.CharField()
