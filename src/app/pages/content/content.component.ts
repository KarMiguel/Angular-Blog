import { Component, OnInit,Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { dataFake } from '../../components/data/dataFake'



@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {
  @Input() photoCover:string="";
  @Input() contentTitle:string="";
  @Input() contentDescription:string ="";
  private id:string | null ="0";
  constructor (
    private rout:ActivatedRoute) { }

  ngOnInit(): void {
    this.rout.paramMap.subscribe( value =>
      this.id=value.get("id")
    )
    this.setValuesToComponents(this.id)
  }

  setValuesToComponents(id:string| null){
    const result =dataFake.filter(article => article.id == id)[0]
    this.contentTitle = result.title
    this.photoCover = result.photo
    this.contentDescription = result.description
  }

}
