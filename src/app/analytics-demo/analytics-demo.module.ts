import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
    Metric,
    AnalyticsImplementation
} from './analytics-demo.interface';
import { AnalyticsService } from '../services/analytics.service';

// added this ->
import {
    HttpModule,
    Http
} from '@angular/http';

@NgModule({
    imports: [
        CommonModule,
        HttpModule, // <-- added
    ],
    providers: [
        { provide: 'API_URL', useValue: 'http://devserver.com' },
        {
            provide: AnalyticsService,

            deps: [Http, 'API_URL'],

        useFactory(http: Http, apiurl: string){
            const loggingImplementation: AnalyticsImplementation = {
                recordEvent(metric: Metric): void{
                    console.log('The Metric is: ',metric);
                    console.log('Sending to: ',apiurl);
                }
            };

            return new AnalyticsService(loggingImplementation);
        }
    }
    ]

})

export class AnalyticsDemoModule { }