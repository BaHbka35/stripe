from rest_framework.authtoken.models import Token

from users.models import User


class AuthenticationTokenService:

    @classmethod
    def get_user_authentication_token(
            cls,
            user: User
    ) -> str:
        """Return user authentication token."""
        return Token.objects.get_or_create(user=user)[0].key

    @classmethod
    def delete_user_authentication_token(
            cls,
            user: User
    ) -> None:
        """Delete user authentication token."""
        Token.objects.get(user=user).delete()