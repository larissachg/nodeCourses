//REPOSITORY -> quien va a permitir llamar a mi Datasource
import { LogEntity, LogSeverityLevel } from "../entities/log.entity";

//PALABRA ABSTRACT -> Para obligar el comportamiento que quiero defirnir en el datasource sobre otras clases. Cuando no se quiere que nadie cree instancias de mi datasource.
export abstract class LogRepository {
  abstract saveLog(log: LogEntity): Promise<void>;
  abstract getLogs(severityLevel: LogSeverityLevel): Promise<LogEntity[]>;
}
