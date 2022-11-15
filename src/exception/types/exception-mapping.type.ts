import { HttpException } from '../exceptions/http.exception';
import { ErrorCodeEnum } from '../../platformClient/enums/error-code.enum';

export type ExceptionMappingType = Partial<Record<ErrorCodeEnum, new (...args: never[]) => HttpException>>;
