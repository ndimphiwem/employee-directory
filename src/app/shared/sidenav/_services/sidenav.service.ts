export class SideNavService {
    private sidenav: any[] = [];

    add(sidenav: any) {
        // add sidenav to array of active sidenav
        this.sidenav.push(sidenav);
    }

    remove(id: string) {
        // remove sidenav from array of active sidenav
        this.sidenav = this.sidenav.filter(x => x.id !== id);
    }

    open(id: string) {
        // open sidenav specified by id
        const sidenav: any = this.sidenav.filter(x => x.id === id)[0];
        sidenav.element.classList.add('c-sidenav--is-visible');
        sidenav.open();
    }

    close(id: string) {
        const sidenav: any = this.sidenav.filter(x => x.id === id)[0];
        sidenav.element.classList.remove('c-sidenav--is-visible');
        sidenav.close();
    }

    clearAll() {
        return this.sidenav.filter(x => x.close());
    }
}
