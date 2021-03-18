import {Component, OnInit} from '@angular/core';
import {BackendService} from '../../backend.service';

@Component({
  selector: 'app-accounts',
  templateUrl: './accounts.component.html',
  styleUrls: ['./accounts.component.css']
})
export class AccountsComponent implements OnInit {
  data;
  accounts;
  accountValue;
  transactionTypes = [
    {
      name: 'deposit',
    }
  ]


  constructor(private readonly backend: BackendService) {
  }

  ngOnInit(): void {
    this.backend.getData().subscribe(value => {
      this.data = value;
      this.accounts = value?.accounts?.account;
      this.accountValue = this.calcAccountValue(this.accounts);
    });
  }

  private calcAccountValue(accounts: any): number {
    accounts.forEach(value => {

    });

    return 1;
  }

}
