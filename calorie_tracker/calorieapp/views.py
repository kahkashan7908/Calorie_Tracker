from django.shortcuts import render,redirect
from .models import FoodItem,Consume

# Create your views here.
def indexpage(request):
    if request.method == "POST":
        food_consumed = request.POST['food_consumed']
        consume = FoodItem.objects.get(name=food_consumed)
        # it retrieves the user associated with the current request.
        user = request.user
        consume = Consume(user=user, food_consumed=consume)
        consume.save()
        foods = FoodItem.objects.all()

    else:
        foods = FoodItem.objects.all()

    #it get all instances of Consume where the user=the current user (request.user).
    # It retrieves the foods that the current user has consumed.
    consumed_food = Consume.objects.filter(user=request.user)
    return render(request, 'myapp/index.html', {'foods': foods, 'consumed_food': consumed_food})

#delete view
def deleteConsume(request,id):
    consume_food=Consume.objects.get(id=id)
    if request.method=='POST':
        consume_food.delete()
        return redirect('/')
    return render(request,'myapp/delete.html')
