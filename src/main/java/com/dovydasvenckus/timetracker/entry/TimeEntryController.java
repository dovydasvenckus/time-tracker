package com.dovydasvenckus.timetracker.entry;

import com.dovydasvenckus.timetracker.helper.date.clock.DateTimeService;
import com.dovydasvenckus.timetracker.helper.rest.RestUrlGenerator;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import javax.ws.rs.*;
import javax.ws.rs.core.Context;
import javax.ws.rs.core.Response;
import javax.ws.rs.core.UriInfo;
import java.util.List;
import java.util.Optional;

import static javax.ws.rs.core.Response.Status.*;

@Component
@Path("/entries")
public class TimeEntryController {

    @Context
    private UriInfo uriInfo;

    private final RestUrlGenerator restUrlGenerator;

    private final TimeEntryService timeEntryService;

    @Autowired
    public TimeEntryController(DateTimeService dateTimeService,
                               RestUrlGenerator restUrlGenerator,
                               TimeEntryService timeEntryService) {
        this.restUrlGenerator = restUrlGenerator;
        this.timeEntryService = timeEntryService;
    }

    @GET
    @Produces("application/json")
    public List<TimeEntryDTO> getAll() {
        return timeEntryService.findAll();
    }

    @GET
    @Produces("application/json")
    @Path("/current")
    public TimeEntryDTO getCurrent() {
        Optional<TimeEntryDTO> current = timeEntryService.findCurrentlyActive();

        return current.orElse(null);
    }

    @POST
    @Path("/start/{project}")
    @Produces("text/plain")
    public Response startTracking(@PathParam("project") long projectId, @QueryParam("description") String description) {
        Optional<TimeEntryDTO> current = timeEntryService.findCurrentlyActive();

        if (!current.isPresent()) {
            TimeEntry timeEntry = timeEntryService.createTimeEntry(projectId, description);

            return Response.status(CREATED)
                    .entity("New time entry has been created")
                    .header("Location",
                            restUrlGenerator.generateUrlToNewResource(uriInfo, timeEntry.getId())
                    ).build();
        }

        return Response.status(INTERNAL_SERVER_ERROR).entity("You are already tracking time on project").build();
    }

    @POST
    @Path("/stop")
    @Produces("text/plain")
    public Response stopCurrent() {
        Optional<TimeEntryDTO> current = timeEntryService.findCurrentlyActive();

        if (current.isPresent()) {
            timeEntryService.stop(current.get());
            return Response.status(OK).build();
        }

        return Response.status(INTERNAL_SERVER_ERROR).entity("No active task").build();
    }

    @POST
    @Consumes("application/json")
    @Produces("text/html")
    public Response createTimeEntry(TimeEntryDTO timeEntryDTO) {
        TimeEntry timeEntry = timeEntryService.create(timeEntryDTO);

        return Response.status(CREATED)
                .entity("New time entry has been created")
                .header("Location",
                        restUrlGenerator.generateUrlToNewResource(uriInfo, timeEntry.getId())
                ).build();
    }

    @DELETE
    @Path("/{project}")
    public Response deleteProject(@PathParam("project") long projectId) {
        timeEntryService.delete(projectId);

        return Response.status(OK).build();
    }
}
