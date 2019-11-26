import { Component } from '@angular/core';  

class Item{
    name: string;
    height: number;
    weigth: number;
    age : number;

    constructor(name: string, height: number, weigth: number, age : number) {
  
        this.name = name;
        this.height = height;
        this.weigth = weigth;
        this.age = age;
    }
}

@Component({
    selector: 'purchase-app',
    template: `<div><h1>Проверка на человека</h1></div><hr>
    <div class="panel">
        <div class="form-inline">
            <div class="form-group">
                <div class="col-md-8" id="NAME">
                    <input class="form-control" [(ngModel)]="text"  placeholder = "Имя" />
                </div>
            </div>
            <div class="form-group">
                <div class="col-md-6">
                    <input type="number" class="form-control" [(ngModel)]="height" id="HEIGHT" placeholder="Рост" />
                </div>            </div>
            <div class="form-group">
                <div class="col-md-4">
                    <input type="number" class="form-control" [(ngModel)]="weigth" id="WEIGHT" placeholder="Вес" />
                </div>
            </div>
            <div class="form-group">
                <div class="col-md-2">
                    <input type="number" class="form-control" [(ngModel)]="age" id="AGE" placeholder="Возраст" />
                </div>
            </div>
    
            <div class="form-group">
                <div class="col-md-2">
                    <button class="btn btn-default" (click)="addItem(text, height, weigth, age)">Добавить</button>
                    <button class="btn btn-default" (click)="alert_try()">Вывод значений в Алерт</button>
                    </div>
            </div>
        </div>
        <hr>
        <table class="table table-striped">
            <thead>
                <tr>
                    <th>Имя</th>
                    <th>Рост</th>
                    <th>Вес</th>
                    <th>Возраст</th>
                </tr>
            </thead>
            <tbody>
                <tr *ngFor="let item of items">
                    <td>{{item.text}}</td>
                    <td>{{item.height}}</td>
                    <td>{{item.weigth}}</td>
                    <td>{{item.age}}</td>
                </tr>
            </tbody>
        </table>
    </div>`
})
export class AppComponent { 
    items: Item[] = [];
    addItem(name: string, height: number, weigth: number, age: number): void {
        
        if(name==null || name.trim()=="" || height==null || height>=300 || height < 10 || weigth==null ||weigth>300||weigth < 2 || age==null ||age > 130 || age < 0)
           {
               alert("УПС, что-то пошло не так, проверьте введенные значения");
               return;
           }
        this.items.push(new Item(name, height, weigth, age));
    }
    alert_try()
 {
     alert(this.items);
}
}