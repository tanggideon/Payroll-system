from django.db import models
from django.contrib.auth.models import AbstractBaseUser, BaseUserManager, PermissionsMixin
from payroll.models import Position
# Create your models here.

class StaffManager(BaseUserManager):
    def create_user(self, 
                    first_name, 
                    last_name,  
                    email,
                    password,
                    **extra_fields
                    ):
        if not email:
            raise ValueError("Email must not be empty")
        email = self.normalize_email(email)

        new_user = self.model(first_name=first_name,  
                    last_name=last_name, 
                    email=email, **extra_fields)
        
        new_user.set_password(password)
        new_user.save(using=self._db)
        return new_user

    def create_superuser(self, 
                    first_name, 
                    last_name,  
                    email,
                    **extra_fields):
        new_user = self.create_user(first_name=first_name,  
                    last_name=last_name,
                    email=email,  **extra_fields)
        new_user.is_admin = True
        new_user.is_active = True
        new_user.is_superuser = True
        new_user.staff = True
        new_user.save(using=self._db)
        return new_user


class Staff(AbstractBaseUser, PermissionsMixin):
    first_name = models.CharField(max_length=64)
    last_name = models.CharField(max_length=64)
    middle_name = models.CharField(max_length=64, null=True, blank=True)
    staff_username = models.CharField(max_length=6, editable=False, null=True, blank=True)
    email = models.EmailField(max_length=128, unique=True)
    birth_date = models.DateField(null=True, blank=True)
    phone = models.CharField(max_length=12, null=True, blank=True)
    address = models.CharField(max_length=256, null=True, blank=True)
    date_added = models.DateTimeField(auto_now_add=True)
    last_updated = models.DateTimeField(auto_now=True)
    date_employed = models.DateField(null=True, blank=True)
    profile_image = models.ImageField(null=True, blank=True)
    position = models.ForeignKey(Position, on_delete=models.SET_NULL, null=True, related_name="staff_position", blank=True)
    is_admin = models.BooleanField(default=False)
    is_staff = models.BooleanField(default=False)
    is_superuser = models.BooleanField(default=False)
    is_active = models.BooleanField(default=False)

    USERNAME_FIELD = "email"
    REQUIRED_FIELDS = ["first_name", "last_name"]

    objects = StaffManager()

    def __str__(self):
        return self.email
    