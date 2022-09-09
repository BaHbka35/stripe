from django.db import models
from django.contrib.auth.models import PermissionsMixin
from django.contrib.auth.base_user import AbstractBaseUser

from .managers import UserManager


class User(AbstractBaseUser, PermissionsMixin):
    """Custom user model."""

    username = models.CharField(
        max_length=30, verbose_name='username', unique=True)

    is_staff = models.BooleanField(
        default=False, verbose_name='Is user a member of staff?')

    is_superuser = models.BooleanField(
        default=False, verbose_name='Is user a superuser?')

    objects = UserManager()

    USERNAME_FIELD = 'username'

    class Meta:
        ordering = ('username',)
        verbose_name_plural = 'Users'
        verbose_name = 'User'
        db_table = 'users'
