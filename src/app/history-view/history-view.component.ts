import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { PipelineService } from '../_services/pipeline.service';
import { History } from '../_models/history.model';
/**
 * @title Table with pagination
 */
@Component({
  selector: 'app-history-view',
  standalone: true,
  imports: [MatTableModule, MatPaginatorModule],
  templateUrl: './history-view.component.html',
  styleUrl: './history-view.component.css'
})

export class HistoryViewComponent implements AfterViewInit {
  displayedColumns: string[] = ['id', 'name', 'with', 'fromtime', 'duration', 'file'];
  dataSource = new MatTableDataSource<History>([]);
  @ViewChild(MatPaginator, { static: false }) paginator: any

  constructor(private pipelineService: PipelineService) {
    this.pipelineService.sendgetHisotry();
  }
  ngOnInit() {
    this.pipelineService.sendgetHisotry();
    this.pipelineService.getHistories().subscribe((data: History[]) => {
      this.dataSource.data = data
    })
  }

  reload() {
    this.dataSource.paginator = this.paginator;
  }
  

  ngAfterContentInit() {
    this.dataSource.paginator = this.paginator;
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
}
