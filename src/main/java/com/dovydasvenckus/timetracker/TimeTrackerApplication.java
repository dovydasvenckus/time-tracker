package com.dovydasvenckus.timetracker;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.domain.EntityScan;
import org.springframework.data.jpa.convert.threeten.Jsr310JpaConverters;

@EntityScan(
        basePackageClasses = {Jsr310JpaConverters.class},
        basePackages = {"com.dovydasvenckus.timetracker"}
)

@SpringBootApplication
public class TimeTrackerApplication {

    public static void main(String[] args) {
        SpringApplication.run(TimeTrackerApplication.class, args);
    }

}