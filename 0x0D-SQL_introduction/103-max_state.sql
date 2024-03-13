-- Author: Olatunji Oluwadare

-- Max Temperature
SELECT state, MAX(temperature) AS max_temperature
FROM temperatures
GROUP BY state
ORDER BY state;
