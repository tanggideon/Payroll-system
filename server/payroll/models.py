from django.db import models
import uuid

# Create your models here.

# Position Model
class Position(models.Model):
    id = models.UUIDField(default=uuid.uuid4, primary_key=True, editable=False)
    title = models.CharField(max_length=256)
    code = models.CharField(max_length=3)
    description = models.TextField()

# Salary Model
class Salaries(models.Model):
    id = models.UUIDField(default=uuid.uuid4, primary_key=True, editable=False)
    position = models.ForeignKey(Position, related_name="position", on_delete=models.CASCADE)
    amount = models.DecimalField(max_digits=10, decimal_places=2)

# Attendance Model
class Attendance(models.Model):
    id = models.UUIDField(default=uuid.uuid4, primary_key=True, editable=False)
    # staff
    reporting_time = models.DateTimeField(auto_now=True)

# Events Model

# Deductions

# Allowances

# Staff Benefits