from django.contrib.auth import authenticate

from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from rest_framework.permissions import IsAuthenticated

from .models import User

from .serializers import SignUpSerializer, LogInSerializer

from .services.token_services import AuthenticationTokenService
from .services.token_signature_services import TokenSignatureService


class SignUpView(APIView):
    """View for registration user."""

    def post(self, request) -> Response:
        """
        Registrate user and send email for account activation.
        """
        serializer = SignUpSerializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        User.objects.create_user(
            username=serializer.data['username'],
            password=serializer.data['password']
        )
        message = {'message': 'User was registered successfully'}
        return Response(data=message, status=status.HTTP_201_CREATED)


class LogInView(APIView):
    """
    View for authenticate user and return him token
    for further authentication and authorization.
    """

    def post(self, request) -> Response:
        """
        Authenticate user and return response
        with token for further authentication.
        """
        serializer = LogInSerializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        user = authenticate(
            username=serializer.data['username'],
            password=serializer.data['password']
        )
        if not user:
            data = {'message': 'Username or password incorrect.'}
            return Response(data=data, status=status.HTTP_400_BAD_REQUEST)
        token = AuthenticationTokenService.get_user_authentication_token(user)
        signature = TokenSignatureService.get_signature(token)
        data = {
            'user': {
                'username': serializer.data['username']
            },
            'token': token,
            'signature': signature}
        return Response(data=data, status=status.HTTP_200_OK)


class LogOutView(APIView):
    """View for logs user out."""

    permission_classes = [IsAuthenticated]

    def get(self, request) -> Response:
        """Logs user out."""
        user = request.user
        AuthenticationTokenService.delete_user_authentication_token(user)
        data = {'message': 'User was successfully logout'}
        return Response(data=data, status=status.HTTP_200_OK)
