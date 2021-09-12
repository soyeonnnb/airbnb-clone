from django.shortcuts import redirect, render
from django.views import View
from django.views.generic import FormView
from django.urls import reverse_lazy, reverse
from django.contrib.auth import authenticate, login, logout
from . import forms


class LoginView(FormView):

    template_name = "users/login.html"
    success_url = reverse_lazy("core:home")
    form_class = forms.LoginForm

    def form_valid(self, form):
        email = form.cleaned_data.get("email")
        password = form.cleaned_data.get("password")
        user = authenticate(self.request, username=email, password=password)
        if user is not None:
            login(self.request, user)
        return super().form_valid(form)


def logout_view(request):
    logout(request)
    return redirect(reverse("core:home"))


class SignUpView(FormView):

    template_name = "users/signup.html"
    success_url = reverse_lazy("core:home")
    form_class = forms.SignUpForm
    initial = {"first_name": "동혁", "last_name": "이", "email": "0825@dream.com"}
