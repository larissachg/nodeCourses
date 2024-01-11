//DATASOURCE -> las reglas, como queremos que funcione
import { LogEntity, LogSeverityLevel } from "../entities/log.entity";

//PALABRA ABSTRACT -> Para obligar el comportamiento que quiero defirnir en el datasource sobre otras clases. Cuando no se quiere que nadie cree instancias de mi datasource.
export abstract class LogDatasource {
  abstract saveLog(log: LogEntity): Promise<void>;
  abstract getLogs(severityLevel: LogSeverityLevel): Promise<LogEntity[]>;
}
