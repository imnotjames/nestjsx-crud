import { ParamsOptions, ParsedRequestParams } from './interfaces';
import { QueryFields, QueryFilter, QueryJoin, QuerySort } from './types';
export declare class RequestQueryParser implements ParsedRequestParams {
    fields: QueryFields;
    paramsFilter: QueryFilter[];
    filter: QueryFilter[];
    or: QueryFilter[];
    join: QueryJoin[];
    sort: QuerySort[];
    limit: number;
    offset: number;
    page: number;
    cache: number;
    private _params;
    private _query;
    private _paramNames;
    private _paramsOptions;
    private readonly _options;
    static create(): RequestQueryParser;
    getParsed(): ParsedRequestParams;
    parseQuery(query: any): this;
    parseParams(params: any, options: ParamsOptions): this;
    private getParamNames;
    private getParamValues;
    private parseQueryParam;
    private parseValue;
    private parseValues;
    private fieldsParser;
    private conditionParser;
    private joinParser;
    private sortParser;
    private numericParser;
    private paramParser;
}