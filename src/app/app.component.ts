import { Component } from '@angular/core';

interface Activity {
  code: string;
  category: string;
  action: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  searchQuery: string = '';
  activities: Activity[] = [
    { code: 'PAO', category: 'Loan Institution Administration', action: 'Setup' },
    { code: 'PAO', category: 'Loan Institution Administration', action: 'Manage Appeals' },
    { code: 'PAO', category: 'Site Visits', action: 'Copy Basic Information' },
    { code: 'PO', category: 'Loan Institution Administration', action: 'Setup' },
    { code: 'PO', category: 'Loan Institution Administration', action: 'Administer Status' },
    { code: 'PO', category: 'Site Visits', action: 'Copy Basic Information' },
    { code: 'PO', category: 'BHW Funding Memo', action: 'Initiate' },
    { code: 'PO', category: 'Loan Institution Administration', action: 'Termination Closeout' },
    { code: 'PAO', category: 'Loan Guarantee Program (LPG)', action: 'Administrative Action' }
  ];

  filteredActivities: Activity[] = [...this.activities];

  onSearchChange() {
    const query = this.searchQuery.toLowerCase();
    this.filteredActivities = this.activities.filter(activity =>
      activity.code.toLowerCase().includes(query) ||
      activity.category.toLowerCase().includes(query) ||
      activity.action.toLowerCase().includes(query)
    );
  }
}
