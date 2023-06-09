import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';



@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss']
})
export class SearchBarComponent {
  constructor(private router: Router) {}
  ngOnInit(): void{

  }
  onSubmit(form: NgForm){
    this.router.navigate(['search', form.value.search])

    console.log("Search bar is working")
  }
}
