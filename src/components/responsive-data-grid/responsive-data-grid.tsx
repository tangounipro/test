import { Component, Prop, Host, h } from '@stencil/core';

@Component({
  tag: 'responsive-data-grid',
  styleUrl: 'responsive-data-grid.css',
  shadow: true,
})
export class ResponsiveDataGrid {
  
  @Prop() first: string;
  @Prop() maxcolumns: string;
  @Prop() jsonfilepath: string;

  @Prop() titlefontsize: string;
  @Prop() descriptionfontsize: string;

  @Prop() cardtitlebg: string;

  productList;

  async componentWillRender(){
  
      let getApi=await fetch(this.jsonfilepath,{
        method:'GET'})
      this.productList=await getApi.json()
  }

  private checkColCount(): number {
    if ( this.maxcolumns !== null && this.maxcolumns !== ''  ){
      return parseInt(this.maxcolumns)
    } else {
      return 100000
    }
  }

  render() {
    
    
    return (
      
      <Host>
      
        <div class="p-grid">
              {this.productList.map((todo, index) => index < this.checkColCount() &&
              <div class=" p-col-6 p-md-6 p-lg-3">
                
                <div class={'p-card p-component' + (todo.free === true ? ' blue' : todo.new === true ? ' green' : '')}><div class="p-card-body"><div class={'p-card-title '+this.cardtitlebg+' font-size-' +this.titlefontsize}>{todo.name}</div><div class={'p-card-content font-size-' +this.descriptionfontsize}><p class="p-m-0" >{todo.description}</p></div></div></div>
                
              </div>
            )}
        </div>
        
        
      </Host>
    );
    
    
    
  }

}
