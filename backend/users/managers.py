from __future__ import annotations
from django.contrib.auth.base_user import BaseUserManager


class UserManager(BaseUserManager):
    """Custom user manager."""

    def _create_base_user(
            self,
            username: str,
            password: str,
            **extra_fields: dict
    ) -> User:

        if not username:
            raise ValueError('User must have username name')
        if not password:
            raise ValueError('User must have password name')

        try:
            user = self.model(
                username=username,
                password=None,
                **extra_fields
            )
        except TypeError:
            raise TypeError('Non existing field of model')

        user.set_password(password)
        user.save()
        return user

    def create_user(
            self,
            username: str,
            password: str,
            **extra_fields: dict) -> User:

        extra_fields['is_superuser'] = False
        extra_fields['is_staff'] = False
        return self._create_base_user(username, password, **extra_fields)

    def create_superuser(
            self,
            username: str,
            password: str,
            **extra_fields: dict
    ) -> User:

        extra_fields['is_superuser'] = True
        extra_fields['is_staff'] = True
        return self._create_base_user(username, password, **extra_fields)
