package com.dovydasvenckus.timetracker.config.jersey;

import com.dovydasvenckus.timetracker.core.rest.exception.validation.ConstraintViolationExceptionMapper;
import com.dovydasvenckus.timetracker.entry.TimeEntryController;
import com.dovydasvenckus.timetracker.core.security.ClientDetails;
import com.dovydasvenckus.timetracker.core.security.CurrentUserResolver;
import com.dovydasvenckus.timetracker.project.ProjectController;
import org.glassfish.hk2.utilities.binding.AbstractBinder;
import org.glassfish.jersey.message.GZipEncoder;
import org.glassfish.jersey.server.ResourceConfig;
import org.glassfish.jersey.server.ServerProperties;
import org.glassfish.jersey.server.filter.EncodingFilter;
import org.springframework.stereotype.Component;

@Component
public class JerseyConfig extends ResourceConfig {
    public JerseyConfig() {
        register(ObjectMapperContextResolver.class);
        register(ProjectController.class);
        register(TimeEntryController.class);

        register(ConstraintViolationExceptionMapper.class);
        register(currentUserContext());

        EncodingFilter.enableFor(this, GZipEncoder.class);
        property(ServerProperties.BV_SEND_ERROR_IN_RESPONSE, true);

    }

    private AbstractBinder currentUserContext() {
        return new AbstractBinder() {
            @Override
            protected void configure() {
                bindFactory(CurrentUserResolver.class).to(ClientDetails.class);
            }
        };
    }
}
