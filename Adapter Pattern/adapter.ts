abstract class BradImpodobit{
    public abstract Pregateste():void;
}

class BradGataImpodobit extends BradImpodobit{
    public Pregateste():void{
        console.log('Pune bradul cumparat deja impodobit in camera de zi!')
    }
}

class BradImpodobitAdapter extends BradImpodobit{
    public Brad: BradImpodobitManual;
    constructor(){
        super();
        this.Brad = new BradImpodobitManual();
    }
    public Pregateste():void{
        this.Brad.PuneBeculete();
        this.Brad.PuneBeteala();
        this.Brad.PuneGloburi();
        this.Brad.PuneSteaua();
    }
}

class BradImpodobitManual{
    public PuneBeculete():void{
        console.log('Asezati beculetele in brad');
    }
    public PuneBeteala():void{
        console.log('Asezati beteala in mod uniform in brad in interiorul coroanei');
    }
    public PuneGloburi():void{
        console.log('Asezati globurile uniform in brad');
    }public PuneSteaua():void{
        console.log('Asezati steaua in varful bradului');
    }
}

var brad:BradImpodobit = new BradImpodobitAdapter();
brad.Pregateste();