import { Component, inject, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog } from '@angular/material/dialog';
import { AiChatDialogComponent, ApiService } from '@hahnpro/ai-sdk';

@Component({
  imports: [MatButtonModule],
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent implements OnInit {
  private readonly apiService = inject(ApiService);
  private readonly matDialog = inject(MatDialog);

  ngOnInit() {
    this.apiService.init('your-client-id', 'your-client-secret');
  }

  openDialog() {
    this.matDialog.open(AiChatDialogComponent, {
      panelClass: ['ai-modal'],
      autoFocus: false,
      data: {
        asset: {
          id: '67aa8b6e56f5aabb4df91d9a',
          name: 'XYZ',
        },
      },
    });
  }
}
