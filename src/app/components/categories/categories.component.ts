import { Component, OnInit } from '@angular/core';
import { ApiCollectionResponse } from 'src/app/models/apiResponse';
import { CategoryDTO } from 'src/app/models/categoryDTO';
import { CategoriesService } from 'src/app/services/categories.service';





@Component({
  selector: 'categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {

  categories!: Array<CategoryDTO>

  constructor(private CategoriesService: CategoriesService) { }

  ngOnInit() {
    this.CategoriesService.getCategories().subscribe((res: ApiCollectionResponse)=>{
      if(res.isSuccessful){
        console.log(res.data)
        this.categories = res.data
      }
    })
  }


 
  
}



