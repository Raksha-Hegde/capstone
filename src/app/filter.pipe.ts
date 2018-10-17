import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'filter'
})
export class FilterPipe implements PipeTransform {
    transform(items: any, loginUsr: string, searchText: string): any[] {
        if (!items) return [];
        if (!searchText) return items.filter(usr=>{
            if(usr.username !== loginUsr){
                return usr.username;
            }             
        });
        searchText = searchText.toLowerCase();
        return items.filter(it => {
            if(it.username !== loginUsr){
            return it.username.toLowerCase().includes(searchText);
            }
        });
    }
}