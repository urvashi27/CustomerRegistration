export class users
{
    name:string;
      customername:string;
      entity:string;
      address1:string;
      address2:string;
      address3:string;
      landmark:string;
      latitude:string;
      longtitude:string;
      gst:string;
      pan:string;
      billing:string;
      bank:string;
      branch:string;
      accountno:number;
      accounttype:string;
      ifsc:number;
      days:string;
      time:string;
      terms:string;
      constructor( name:string,
        customername:string,
        entity:string,
        address1:string,
        address2:string,
        address3:string,
        landmark:string,
        latitude:string,
        longtitude:string,
        gst:string,
        pan:string,
        billing:string,
        bank:string,
        branch:string,
        accountno:number,
        accounttype:string,
        ifsc:number,
        days:string,
        time:string,
        terms:string)
      {
          this.name=name;
          this.customername=customername;
          this.entity=entity;
          this.address1=address1;
          this.address2=address2;
          this.address3=address3;
          this.landmark=landmark;
          this.latitude=latitude;
          this.longtitude=longtitude;
          this.gst=gst;
          this.pan=pan;
          this.billing=billing;
          this.bank=bank;
          this.branch=branch;
          this.accountno=accountno;
          this.accounttype=accounttype;
          this.ifsc=ifsc;
          this.days=days;
          this.time=time;
          this.terms=terms;


      }
    
}